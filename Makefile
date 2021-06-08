.PHONY: all github


VERSION := $(shell node -p -e "require('./package.json').version")
LEAD := $(shell head -n 1 LEAD.md)


github:
	sed -i -E "s/@(\w*)/@$(LEAD)/" .github/issue_template.md
	sed -i -E "s/@(\w*)/@$(LEAD)/" .github/pull_request_template.md
