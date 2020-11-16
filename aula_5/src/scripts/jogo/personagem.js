class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite
  ) {
    super(
      matriz,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite
    );
    this.variacaoY = variacaoY;
    this.yInicial = height - altura - this.variacaoY;

    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }

  pula() {
    // controla a quantidade de pulos sequenciais
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      // reseta a quantidade de pulos
      this.pulos = 0;
    }
  }

  ficaInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 2000);
  }

  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    } else {
      const precisao = 0.7;

      // debug
      // noFill();
      // rect(this.x + (this.largura - (this.largura * precisao))/2,
      //   this.y + (this.altura - (this.altura * precisao))/2,
      //   this.largura * precisao,
      //   this.altura * precisao);
      // rect(inimigo.x + (inimigo.largura - (inimigo.largura * precisao))/2,
      //   inimigo.y + (inimigo.altura - (inimigo.altura * precisao))/2,
      //   inimigo.largura * precisao,
      //   inimigo.altura * precisao);
      // end debug

      const colisao = collideRectRect(
        this.x + (this.largura - this.largura * precisao) / 2,
        this.y + (this.altura - this.altura * precisao) / 2,
        this.largura * precisao,
        this.altura * precisao,
        inimigo.x + (inimigo.largura - inimigo.largura * precisao) / 2,
        inimigo.y + (inimigo.altura - inimigo.altura * precisao) / 2,
        inimigo.largura * precisao,
        inimigo.altura * precisao
      );

      return colisao;
    }
  }
}
