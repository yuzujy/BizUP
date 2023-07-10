<?php

class Appointment {
  // (A) CONSTRUCTOR - CONNECT TO DATABASE
  private $pdo = null;
  private $stmt = null;
  public $error = "";

  function __construct () {
    $this->pdo = new PDO(
      "mysql:host=".DB_HOST.";dbname=".DB_NAME.";charset=".DB_CHARSET,
      DB_USER, DB_PASSWORD, [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
  }

  // (B) DESTRUCTOR - CLOSE DATABASE CONNECTION
  function __destruct () {
    if ($this->stmt!==null) { $this->stmt = null; }
    if ($this->pdo!==null) { $this->pdo = null; }
  }

  // (C) HELPER FUNCTION - EXECUTE SQL QUERY
  function query ($sql, $data=null) : void {
    $this->stmt = $this->pdo->prepare($sql);
    $this->stmt->execute($data);
  }

  // (D) GET APPOINTMENTS IN DATE RANGE
  function get ($from, $to) {
    $this->query(
      "SELECT * FROM `appointments` WHERE `date` BETWEEN ? AND ?",
      [$from, $to]
    );
    $res = [];
    while ($r = $this->stmt->fetch()) {
      $res[$r["date"]][$r["time"]] = $r["user"];
    }
    return $res;
  }

  // (E) SAVE APPOINTMENT
  function save ($staff, $service, $date, $time, $user) {
    // (E1) CHECK SELECTED DATE
    $min = strtotime("+".APPO_MIN." day");
    $max = strtotime("+".APPO_MAX." day");
    $unix = strtotime($date);
    if ($unix < $min || $unix > $max) {
      $this->error = "Date must be between ".date("Y-m-d", $min)." and ".date("Y-m-d", $max);
      return false;
    }

    // (E2) CHECK PREVIOUS APPOINTMENT
    $this->query(
      "SELECT * FROM `appointments` WHERE `date`=? AND `time`=?",
      [$date, $time]
    );
    if (is_array($this->stmt->fetch())) {
      $this->error = "$date $time is already booked";
      return false;
    }

    // (E3) CREATE ENTRY
    $this->query(
      "INSERT INTO `appointments` (`staff`, `service`, `date`, `time`, `user`) VALUES (?,?,?,?,?)",
      [$staff, $service, $date, $time, $user]
    );
    return true;
  }
}

// (F) APPOINTMENT DATES & SLOTS - CHANGE TO YOUR OWN!
define("APPO_SLOTS", ["1000", "1200", "1400", "1600", "1800", "2000"]);
define("APPO_MIN", 1); // next day
define("APPO_MAX", 7); // next week

// (G) DATABASE SETTINGS - CHANGE TO YOUR OWN!
define("DB_HOST", "fdb1030.awardspace.net");
define("DB_NAME", "4343444_appointmentbooking");
define("DB_CHARSET", "utf8mb4");
define("DB_USER", "4343444_appointmentbooking");
define("DB_PASSWORD", "bizup2023");

// (H) NEW APPOINTMENT OBJECT
$_APPO = new Appointment();
