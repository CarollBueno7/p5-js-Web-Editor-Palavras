let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["HOPE", "HOME", "HAPPY"];
  return random(palavras);
}

function inicializaEstilo() {
  background(255);
  fill("purple");
  textSize(60);
  textAlign(CENTER, CENTER);
  textFont("Impact");
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaEstilo();

  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
}

function pesquisaPeloConteudoDoVideo(assunto, palavraschave) {
  // ...
  return videosRelacionadosAoConteudoPesquisado;
}
