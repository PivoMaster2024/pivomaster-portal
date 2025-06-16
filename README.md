# Portal Central - Pivô Master V3

Portal de gerenciamento centralizado para dispositivos Pivô Master espalhados pelo Brasil.

## 🚀 Funcionalidades

- **Login Seguro**: Autenticação para acesso ao portal
- **Dashboard Central**: Visualização de todos os dispositivos
- **Status em Tempo Real**: Monitoramento online/offline
- **Acesso Direto**: Clique para acessar cada ESP32
- **Gerenciamento**: Adicionar/remover dispositivos
- **Interface Responsiva**: Funciona em desktop e mobile

## 🔐 Credenciais Padrão

- **Usuário**: admin
- **Senha**: MasterPivo2024

## 📱 Como Usar

1. **Acesse**: pivomaster.com.br
2. **Faça login** com as credenciais
3. **Adicione dispositivos** clicando em "Adicionar Dispositivo"
4. **Monitore** o status em tempo real
5. **Acesse** qualquer dispositivo com um clique

## 🔧 Configuração de Dispositivos

Para cada ESP32, você precisará configurar:

- **Nome**: Ex: "Pivô São Paulo"
- **Localização**: Ex: "São Paulo - SP"  
- **URL**: Ex: "pivo001.ddns.net:8080" ou IP direto

## 🌐 Deploy na Vercel

Este projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. Configure o domínio personalizado (pivomaster.com.br)
3. Deploy automático a cada commit

## 🛡️ Segurança

- Autenticação obrigatória
- Dados salvos localmente no navegador
- Comunicação HTTPS
- Acesso direto aos dispositivos (sem intermediários)

## 📊 Monitoramento

O portal verifica automaticamente o status de cada dispositivo a cada 30 segundos, mostrando:

- Status online/offline
- Tensão atual
- Faixa de operação
- Informações em tempo real

