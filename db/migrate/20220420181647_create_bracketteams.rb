class CreateBracketteams < ActiveRecord::Migration[7.0]
  def change
    create_table :bracketteams do |t|
      t.references :team, null: false, foreign_key: true
      t.references :bracket, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
