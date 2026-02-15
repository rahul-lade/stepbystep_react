# Install all VS Code extensions from Insiders to normal VS Code
Write-Host "Installing VS Code extensions..." -ForegroundColor Green

$extensions = @(
    "aaron-bond.better-comments",
    "achaq.vercel-theme",
    "bradlc.vscode-tailwindcss",
    "burkeholland.simple-react-snippets",
    "christian-kohler.path-intellisense",
    "ckolkman.vscode-postgres",
    "cweijan.dbclient-jdbc",
    "cweijan.vscode-postgresql-client2",
    "dbaeumer.vscode-eslint",
    "dsznajder.es7-react-js-snippets",
    "eg2.vscode-npm-script",
    "formulahendry.auto-close-tag",
    "formulahendry.auto-rename-tag",
    "github.copilot-chat",
    "github.vscode-github-actions",
    "github.vscode-pull-request-github",
    "kisstkondoros.vscode-gutter-preview",
    "mgmcdermott.vscode-language-babel",
    "mongodb.mongodb-vscode",
    "pkief.material-icon-theme",
    "pmneo.tsimporter",
    "prisma.prisma",
    "prisma.prisma-insider",
    "rangav.vscode-thunder-client",
    "rbbit.typescript-hero",
    "redhat.vscode-yaml",
    "redis.redis-for-vscode",
    "ritwickdey.liveserver",
    "rodrigovallades.es7-react-js-snippets",
    "rvest.vs-code-prettier-eslint",
    "shd101wyy.markdown-preview-enhanced",
    "streetsidesoftware.code-spell-checker",
    "swyphcosmo.spellchecker",
    "usernamehw.errorlens",
    "yoavbls.pretty-ts-errors",
    "zolardev.js-runner"
)

$total = $extensions.Count
$current = 0

foreach ($extension in $extensions) {
    $current++
    Write-Host "[$current/$total] Installing $extension..." -ForegroundColor Cyan
    code --install-extension $extension --force
}

Write-Host "`nAll extensions installed successfully!" -ForegroundColor Green
Write-Host "Please restart VS Code for changes to take effect." -ForegroundColor Yellow
