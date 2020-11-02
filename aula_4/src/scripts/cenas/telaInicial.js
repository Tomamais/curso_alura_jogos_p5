class TelaInicial {
  constructor() {}
  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    // pinta o texto abaixo de preto
    fill(0);
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(150);

    text("As aventuras de", width / 2, height / 3);
    textSize(300);
    text("Hipsta", width / 2, (height / 5) * 3);

    // pinta o texto abaixo de branco
    fill(255);
    textSize(50);
    text("Criador por ... ", width / 2, height - 100);
  }

  _botao() {
    botaoGerenciador.y = (height / 7) * 5;
    botaoGerenciador.draw();
  }
}
