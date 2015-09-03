<?php
namespace Sff\LiensBundle;

class Validator
{
    public function getStatusCode($url)
    {
        $headers = get_headers($url);
        return intval(substr($headers[0], 9, 3));
    }
}