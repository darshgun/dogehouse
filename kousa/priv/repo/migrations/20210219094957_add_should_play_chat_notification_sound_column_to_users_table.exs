defmodule Beef.Repo.Migrations.AddShouldPlayChatNotificationSoundColumnToUsersTable do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :shouldPlayChatNotificationSound, :boolean
    end
  end
end
