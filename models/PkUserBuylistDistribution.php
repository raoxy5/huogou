<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "pk_user_buylist_100".
 *
 * @property string $id
 * @property integer $user_id
 * @property integer $product_id
 * @property string $period_id
 * @property string $buy_size
 * @property integer $buy_table
 * @property string $buy_time
 */
class PkUserBuylistDistribution extends \yii\db\ActiveRecord
{
    private static $_userHomeId;

    public static function instantiate($row)
    {
        return new static(static::$_userHomeId);
    }

    public function __construct($userHomeId, $config = [])
    {
        parent::__construct($config);
        static::$_userHomeId = $userHomeId;
    }

    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        $tableId = substr(static::$_userHomeId, 0, 3);
        return 'pk_user_buylist_' . $tableId;
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user_id', 'product_id', 'period_id', 'buy_size', 'buy_time'], 'required'],
            [['user_id', 'product_id', 'period_id', 'buy_size', 'buy_table'], 'integer'],
            [['buy_time'], 'string', 'max' => 16],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'product_id' => 'Product ID',
            'period_id' => 'Period ID',
            'buy_size' => 'Buy Size',
            'buy_table' => 'Buy Table',
            'buy_time' => 'Buy Time',
        ];
    }

    /**
     * @param $userHomeId
     * @return \yii\db\ActiveQuery the newly created [[ActiveQuery]] instance.
     */
    public static function findByUserHomeId($userHomeId) {
        $model = new static($userHomeId);
        return $model::find();
    }

    /**
     * @param $userHomeId
     * @param $condition
     * @return \yii\db\ActiveRecord|null ActiveRecord instance matching the condition, or `null` if nothing matches.
     */
    public static function findOneByUserHomeId($userHomeId, $condition)
    {
        $model = new static($userHomeId);
        return $model::findOne($condition);
    }

    /**
     * @param $userHomeId
     * @param $condition
     * @return \yii\db\ActiveRecord[] an array of ActiveRecord instances, or an empty array if nothing matches.
     */
    public static function findAllByUserHomeId($userHomeId, $condition)
    {
        $model = new static($userHomeId);
        return $model::findAll($condition);
    }
}
