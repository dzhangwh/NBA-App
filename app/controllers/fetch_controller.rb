class FetchController < ApplicationController


    def api
        
        api = "http://data.nba.net/prod/v2/2021/teams.json"
        r = RestClient.get(api)
        ret = JSON.parse(r)


        render json: {key: ret}, status: :ok


    end 

#“http://data.nba.net/prod/v2/2021/teams.json"

end 