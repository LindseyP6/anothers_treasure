class ItemsController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :destroy]

    def index
        items = Item.all
        render json: items
    end
    

    def create
        item = Item.create!(item_params)
        
        render json: item, status: :created
    end

    def update 
        item = Item.find(parmas[:id])
        item.update!(item_params)

        render json: item, status: :accepted
    end

    def destroy 
        item = Item.find(params[:id])
        item.destroy 

        head :no_content

    end
    private

    def item_params
        params.permit(:name, :description, :image, :category, :organization_id, :org_name)
    end
end
    


