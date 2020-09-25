<?php 

class Controller {
	function __construct() {
		$this->view = new View();
		$this->model = new DataModel();
	}

	function route() {
		$estates  = $this->model->getProducts();
		$this->view->buildView($estates);
	}

}