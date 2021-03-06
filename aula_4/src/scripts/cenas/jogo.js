class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    pontuacao = new Pontuacao();
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(
      matrizPersonagem,
      imagemPersonagem,
      0,
      30,
      110,
      135,
      220,
      270
    );
    const inimigo = new Inimigo(
      matrizInimigo,
      imagemInimigo,
      width - 52,
      30,
      52,
      52,
      104,
      104,
      10,
      100
    );
    const inimigoGrande = new Inimigo(
      matrizInimigoGrande,
      imagemInimigoGrande,
      width,
      0,
      200,
      200,
      400,
      400,
      10,
      100
    );
    const inimigoVoador = new Inimigo(
      matrizInimigoVoador,
      imagemInimigoVoador,
      width - 52,
      200,
      100,
      75,
      200,
      150,
      10,
      100
    );

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key === "ArrowUp") {
      this._pula();
    }
  }

  touch() {
    this._pula();
  }

  draw() {
    // as imagens são criadas na ordem, por isso o cenário vem primeiro
    cenario.exibe();
    cenario.move();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(10, 30));
    }

    if (personagem.estaColidindo(inimigo)) {
      // console.log('pá!');
      image(imagemGameOver, width / 2 - 200, height / 3);
      noLoop(); // isso pára o loop do jogo (menos o som :])
    }
  }

  _pula() {
    personagem.pula();
    somDoPulo.play();
  }
}
