.PHONY: \
		build \
		check_status \
		mutants \
		tests \
		up

build:
	docker build --tag islasgeci/tablero_front .

check:
	docker run islasgeci/tablero_front make check

check_status:
	docker exec tablero_front make check_status
	make check_status

mutants:
	docker run islasgeci/tablero_front make mutants

tests:
	docker run islasgeci/tablero_front make tests

up:
	docker run --detach --name tablero_front --publish 80:80 islasgeci/tablero_front
