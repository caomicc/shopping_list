json.array!(@items) do |item|
  json.extract! item, :id, :name, :checked, :comment, :cost
  json.url item_url(item, format: :json)
end
