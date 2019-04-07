class CreateProfileLegendData < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_legend_data do |t|
      t.string :profile_uid
      t.string :legend
      t.string :data_name
      t.string :data_value

      t.timestamps
    end
  end
end
