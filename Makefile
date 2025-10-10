.PHONY: help init dev build preview clean install lint format test check

# Colores para output
GREEN  := \033[0;32m
YELLOW := \033[0;33m
NC     := \033[0m # No Color

help: ## Muestra esta ayuda
	@echo "$(GREEN)Comandos disponibles:$(NC)"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-20s$(NC) %s\n", $$1, $$2}'

check: ## Verifica que el entorno está configurado correctamente
	@echo "$(GREEN)Verificando configuración...$(NC)"
	@./check-setup.sh

init: ## Inicializa el proyecto Vite con TypeScript
	@echo "$(GREEN)Inicializando proyecto Vite...$(NC)"
	@./init-vite.sh

install: ## Instala dependencias del proyecto
	@echo "$(GREEN)Instalando dependencias...$(NC)"
	@npm install

dev: ## Inicia el servidor de desarrollo
	@echo "$(GREEN)Iniciando servidor de desarrollo...$(NC)"
	@npm run dev

build: ## Construye el proyecto para producción
	@echo "$(GREEN)Construyendo proyecto...$(NC)"
	@npm run build

preview: ## Vista previa del build de producción
	@echo "$(GREEN)Iniciando vista previa...$(NC)"
	@npm run preview

lint: ## Ejecuta el linter
	@echo "$(GREEN)Ejecutando linter...$(NC)"
	@npm run lint

format: ## Formatea el código con Prettier
	@echo "$(GREEN)Formateando código...$(NC)"
	@npm run format

test: ## Ejecuta los tests
	@echo "$(GREEN)Ejecutando tests...$(NC)"
	@npm run test

clean: ## Limpia node_modules y archivos de build
	@echo "$(YELLOW)Limpiando archivos...$(NC)"
	@rm -rf node_modules dist build coverage
	@echo "$(GREEN)✓ Limpieza completada$(NC)"
