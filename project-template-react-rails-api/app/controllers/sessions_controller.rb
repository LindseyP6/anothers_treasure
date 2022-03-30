class SessionsController < ApplicationController
    skip_before_action :authorized_user, only: [:login]

    def login
        user = User.find_by(name:params[:name])
        
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok 
        else 
            render json: {error: "Invalid password or username"}, status: :unauthorized
        end 
    end 

    def destroy
        session.delete :current_user
    end
end
