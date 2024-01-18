<?php
class Router
{
    private static $route = [];

    public static function addRoute($method, $uri, $callback)
    {
        self::$route[$method][$uri] = $callback;
    }

    public static function getRoute()
    {
        var_dump(self::$route);
    }

    public static function reqHandler($method, $uri)
    {
        foreach (self::$route[$method] as $route => $action) {
            if ($uri === $route) {
                return call_user_func($action);
            }
        }
        echo "not handle";
    }
}
