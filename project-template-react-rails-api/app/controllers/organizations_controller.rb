class OrganizationsController < ApplicationController
    skip_before_action :authorized_user, only: [:index]
    
    def index
        orgs = Organization.all
        render json: orgs
    end

    
end
