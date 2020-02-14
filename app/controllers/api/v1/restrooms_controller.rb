class Api::V1::RestroomsController < ApplicationController

protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Restroom.all
  end

  def show
    restroom = Restroom.find(params[:id])
    render json: restroom
  end

end
