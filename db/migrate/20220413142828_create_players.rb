class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :firstName
      t.string :lastName
      t.integer :personId
      t.string :teamName
      t.string :positionFull

      t.timestamps
    end
  end
end
