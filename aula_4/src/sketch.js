function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo();
  jogo.setup();
  telaInicial = new TelaInicial();
  //telaInicial.setup();
  cenaAtual = "telaInicial";
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial,
  };
  botaoGerenciador = new BotaoGerenciador("Iniciar", width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function touchStarted() {
  if (jogo) jogo.touch();
}

function draw() {
  cenas[cenaAtual].draw();
}
