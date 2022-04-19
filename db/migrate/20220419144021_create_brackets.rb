class CreateBrackets < ActiveRecord::Migration[7.0]
  def change
    create_table :brackets do |t|
      t.string :name
      
      t.references :user, null: false, foreign_key: true
      t.references :team, null: false, foreign_key: true
      t.timestamps
    end
  end
end
