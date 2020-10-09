<?php 

class DatabaseService {

	function __construct($name) {

		$this->pdoObject = new PDO("mysql:host=localhost;dbname=$name;charset=utf8", "root", "");
	}

	function queryDatabase($sql) {

		$resultTable = array(); 

		try {

			foreach ($this->pdoObject->query($sql) as $row) 

			{
			 $resultTable[] = $row; 
			}

			return $resultTable;
		} 

		catch (PDOException $ex){
		 	error_log("PDO ERROR: querying database: " . $ex->getMessage()."\n".$sql);
		}
	
	}

}