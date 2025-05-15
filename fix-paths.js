const fs = require('fs');
const path = require('path');

// Diretório de output
const outputDir = path.join(__dirname, 'out');

// Função para modificar os caminhos nos arquivos HTML
function fixPaths(filePath) {
  console.log(`Processando ${filePath}...`);
  
  // Ler o conteúdo do arquivo
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Substituir caminhos absolutos por caminhos relativos para _next
  content = content.replace(/\"\/_next\//g, "\".\/_next\/");
  
  // Escrever o conteúdo modificado de volta para o arquivo
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Arquivo ${filePath} processado com sucesso.`);
}

// Função para processar recursivamente um diretório
function processDirectory(directory) {
  const items = fs.readdirSync(directory);
  
  for (const item of items) {
    const itemPath = path.join(directory, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      processDirectory(itemPath);
    } else if (itemPath.endsWith('.html')) {
      fixPaths(itemPath);
    }
  }
}

// Processar o diretório de output
console.log('Iniciando correção de caminhos...');
processDirectory(outputDir);
console.log('Correção de caminhos concluída!');
