<?php
header('Content-Type: application/json');

// (A) LOAD LIBRARY + INIT
require "bookappt.php";

// (B) HANDLE API REQUESTS
$action = $_GET['action'] ?? null;

if ($action === 'get') {
  // (C) GET APPOINTMENTS IN DATE RANGE
  $from = $_GET['from'] ?? null;
  $to = $_GET['to'] ?? null;
  if ($from && $to) {
    $booked = $_APPO->get($from, $to);
    echo json_encode($booked);
  }
} elseif ($action === 'save') {
  // (D) SAVE APPOINTMENT
  $staff = $_POST['staff'] ?? null;
  $service = $_POST['service'] ?? null;
  $date = $_POST['date'] ?? null;
  $time = $_POST['time'] ?? null;
  $user = $_POST['user'] ?? null;
  if ($staff && $service && $date && $time && $user) {
    $result = $_APPO->save($staff, $service, $date, $time, $user);
    echo json_encode(['success' => $result]);
  }
} else {
  echo json_encode(['error' => 'Invalid action']);
}
