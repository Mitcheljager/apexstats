class EventsController < ApplicationController
  before_action :set_event, only: [:edit, :update, :destroy]
  before_action do
    unless Flipper.enabled?(:events)
      redirect_to root_path
    end
  end

  before_action only: [:update, :edit, :create, :new] do
    redirect_to account_path unless current_user && current_user.level == 100
  end

  def index
    @events = Event.all
  end

  def show
    @event = Event.select { |event| event.title.downcase.gsub(" ", "-") == params[:title].downcase }.first
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)

    if @event.save
      redirect_to events_path, notice: "Event was successfully created."
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @event.update(event_params)
      redirect_to events_path, notice: "Event was successfully updated."
    else
      render :edit
    end
  end

  private

  def set_event
    @event = Event.find(params[:id])
  end

  def event_params
    params.require(:event).permit(
      :title, :description,
      :data_names, :legends,
      :start_datetime, :end_datetime,
      :reward_first_place, :reward_second_place, :reward_third_place,
      :badge_id_first_place, :badge_id_participation)
  end
end
