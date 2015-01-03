<?php

/**
 * Abstract base class for all recipes
 */
abstract class Recipe {
  /**
   * @var string the name of the recipe
   */
  protected $name;

  /**
   * Cooks the recipe.
   * @param integer $persons the number of persons to cook for
   */
  public abstract function cook($persons);

  /**
   * Gets the name of the recipe.
   * @return string the name of the recipe
   */
  public function getName() {
    return $this->name;
  }
}
