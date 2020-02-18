class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  def show
    restroom = Restroom.find(params[:restroom_id])
    reviews = restroom.reviews
    render json: reviews
  end

  def create
    restroom = Restroom.find(params["restroom_id"])
  end

end
