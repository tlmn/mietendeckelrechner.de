<?php

error_reporting(E_ALL);

$params['fullpage']  = '';
$params['width'] = '1200';
$params['viewport']  = '1200x630';
$params['format'] = '';
$params['css_url'] = '';
$params['delay'] = '';
$params['ttl'] = '';
$params['force']     = '';
$params['placeholder'] = '';
$params['user_agent'] = '';
$params['accept_lang'] = '';
$params['export'] = '';
$url = "https://test.mietendeckelrechner.de/share/generator/generate.php?saving=" . $_GET['saving'];

function download_image($image_url, $image_file)
{
    $fp = fopen($image_file, 'w+');
    $ch = curl_init($image_url);
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_TIMEOUT, 1000);
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0');
    curl_exec($ch);
    curl_close($ch);
    fclose($fp);
}

function screenshotlayer($url, $args)
{
    $access_key = "dfd89bb87329d7fe3caa2bcfe1983ba9";
    $secret_keyword = "mietendeckelrechner";
    $params['url'] = urlencode($url);
    $params += $args;
    foreach ($params as $key => $value) {
        $parts[] = "$key=$value";
    }
    $query = implode("&", $parts);
    $secret_key = md5($url . $secret_keyword);
    return "https://api.screenshotlayer.com/api/capture?access_key=$access_key&secret_key=$secret_key&$query";
}


$call = screenshotlayer($url, $params);
$filename = $_SERVER['DOCUMENT_ROOT'] . '/share/captures/og-image-' . $_GET['saving'] . '.jpg';

if (file_exists($filename)) {
    $type = 'image/jpeg';
    header('Content-Type:' . $type);
    readfile($filename);
} else {
    $fp = fopen($filename, 'w');
    if ($fp === false) {
        throw new Exception('Could not open: ' . $filename);
    }
    
    $ch = curl_init($call);
    curl_setopt($ch, CURLOPT_FILE, $fp);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    curl_exec($ch);

    if (curl_errno($ch)) {
        throw new Exception(curl_error($ch));
    }
    curl_close($ch);
    fclose($fp); 
    $type = 'image/jpeg';
    header('Content-Type:' . $type);
    readfile($filename);
}
