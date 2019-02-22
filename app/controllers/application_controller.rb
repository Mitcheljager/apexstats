class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :reset_ad_counter

  $ad_counter = 1

  def reset_ad_counter
    $ad_counter = 1
  end
end
