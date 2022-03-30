class UsersController < ApplicationController
    # skip_before_action :authorized_user, only: :create

    def index
        users= User.all
        render json: users, status: :ok
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: "No current user", status: :unauthorized
        end 
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:name, :telephone, :email, :password)
    end
end