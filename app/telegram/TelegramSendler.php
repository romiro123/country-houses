<?php

class TelegramSender
{

  const TELEGRAM_TOKEN = '6995150551:AAF92rbiUZEmsKoUFNzAFFb8T1TF1T-EZHs';
  const TELEGRAM_CHATID = '362904640';
  private $curl_client;

  public function __construct()
  {
    $this->curl_client = curl_init();
  }

  /**
   * @param $data
   * @return false
   */
  public function send($data): bool
  {
    $result = $this->prepareData($data);

    curl_setopt_array(
      $this->curl_client,
      [
        CURLOPT_URL => 'https://api.telegram.org/bot' . self::TELEGRAM_TOKEN . '/sendMessage',
        CURLOPT_POST => TRUE,
        CURLOPT_RETURNTRANSFER => TRUE,
        CURLOPT_TIMEOUT => 10,
        CURLOPT_POSTFIELDS => [
          'chat_id' => self::TELEGRAM_CHATID,
          'text' => $result,
          'parse_mode' => 'html'
        ],
      ]
    );

    try {
      $res = json_decode(curl_exec($this->curl_client));
      return (bool) $res->ok;
    } catch (\Exception) {
      return false;
    }
  }

  /**
   * @param $data
   * @return string
   */
  private function prepareData($data): string
  {
    $txt = "<b>Новая заявка</b> \n";

    $arr = [
      'Имя' => $data['name'],
      'Телефон' => '+' . preg_replace('/[^0-9]/', '', $data['phone'])
    ];

    foreach ($arr as $key => $value) {
      $txt .= "<b>$key: </b>$value \n";
    }

    return $txt;
  }
}
