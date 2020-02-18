class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    restroom = Restroom.find(params[:restroom_id])
    reviews = restroom.reviews
    render json: reviews
  end

  def create
    restroom = Restroom.find(params["restroom_id"])
    review = Review.new(review_params)
    review.user = current_user
    review.album = album

    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }, status:
      :unprocessable_entity
    end
  end

end
