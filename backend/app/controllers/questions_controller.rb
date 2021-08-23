class QuestionsController < ApplicationController
  before_action :render_error_if_user_mismatch

  def index
    user = params[:user_id]
    questions = user.questions
    render json: QuestionSerializer.new(questions)
  end

  def show
    # get 'users/:user_id/questions/:question_id' => 'questions#show'
  end

  def create
    # post 'users/:user_id/questions' => 'questions#create'
    # Question.create(attribute: params[:attribute])

    # old code - take the find or initialise by (stack question ID) and new record?, then if new record add the remaining attributes and save, then render json of the persisted instance

    # UserJoke.approve_or_reject(params[:id], params[:identifier], params[:approveOrReject], params[:additional_attributes])

    # def approve_or_reject(user_id, identifier, approve_or_reject, additional_attributes = nil)
    #     approved = (approve_or_reject == 'approve') ? true : false
    #     resource_model = self.name.gsub("User", "").constantize
    #     resource_instance = resource_model.find_or_initialize_by(:"#{resource_model.identifier}" => identifier)

    #     if resource_instance.new_record?
    #         if additional_attributes
    #             additional_attributes.each do |key, value|
    #                 resource_instance.send("#{key}=", value)
    #             end
    #         end
    #         resource_instance.save
    #     end

    #     user_resource_instance = self.find_or_create_by(user_id: user_id, :"#{self.name.gsub("User", "").underscore}_id" => resource_instance.id)
    #     user_resource_instance.update(approved: approved)
    # end
  end

  def update
    # patch 'users/:user_id/questions/:question_id' => 'questions#update'
  end
end
