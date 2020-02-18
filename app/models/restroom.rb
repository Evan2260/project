class Restroom < ApplicationRecord
  belongs_to :user
  has_many :reviews

  validates :business_name, presence: true
  validates :business_name, uniqueness: true
  validates :location, presence: true
  validates :location, uniqueness: true
  validates :restroom_image, presence: true
  validates :sanitation, presence: true
end
