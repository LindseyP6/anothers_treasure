class OrganizationsController < ApplicationController
    def index
        orgs = Organization.all
        render json: orgs
    end
end
