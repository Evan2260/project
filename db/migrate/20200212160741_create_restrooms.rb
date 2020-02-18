class CreateRestrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :restrooms do |t|
      t.string :business_name, null:false
      t.string :location, null:false
      t.string :restroom_image, null:false
      t.string :sanitation, null:false
      t.boolean :payment
      t.boolean :paying_customer
      t.boolean :employee_only
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
