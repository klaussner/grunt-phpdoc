<?php

/**
 * A class used for testing grunt-phpdoc.
 */
class Fixture {
  /**
   * Constructor.
   */
  function __construct() {
  }

  /**
   * Adds two numbers or objects.
   *
   * @param mixed $a first summand
   * @param mixed $b second summand
   * @return mixed the sum of the two numbers
   */
  public function addNumbers($a, $b) {
    return $a + $b;
  }
}
