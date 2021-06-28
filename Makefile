.PHONY: \
		check \
		check_html \
		check_js \
		check_status \
		clean \
		format \
		format_html \
		format_js \
		setup \
		tests

check: setup check_html check_js

check_html:
	yarn workspace public_html prettier:check_html

check_js:
	yarn workspace public_html prettier:check_js

check_status:
	curl --head --silent localhost | grep "200 OK"

clean:
	rm --force --recursive node_modules
	rm --force --recursive public_html/node_modules

format: setup format_html format_js

format_html:
	yarn workspace public_html prettier:format_html

format_js:
	yarn workspace public_html prettier:format_js

setup:
	yarn

tests: setup
	yarn test
