class Todo < ApplicationRecord
	include Rails.application.routes.url_helpers
	belongs_to :user
	has_one_attached :attach

	def attach_url
		attach.attached? ? url_for(attach) : nil
	end
end
