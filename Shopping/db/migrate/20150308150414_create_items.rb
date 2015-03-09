class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :checked
      t.string :comment
      t.integer :cost

      t.timestamps null: false
    end
  end
end
