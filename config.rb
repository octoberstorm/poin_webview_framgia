#Markdown
set :markdown_engine, :redcarpet

#Livereload
activate :livereload


###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Pretty URLs (Directory Indexes)
# activate :directory_indexes

# Build-specific configuration
configure :build do

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Create favicon/touch icon set from source/favicon_base.png
  # activate :favicon_maker

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  activate :relative_assets
  set :relative_links, true

  # Compress PNGs after build (Add gem "middleman-smusher" to the Gemfile to install)
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

# # Activate sync extension
# # see more info http://blog.qnyp.com/2013/05/21/middleman-sync/
# activate :sync do |sync|
#   # 利用するストレージプロバイダの識別子。S3を利用する場合は`AWS`
#   sync.fog_provider = 'AWS'

#   # アップロード先となるS3 Bucketの名前
#   sync.fog_directory = 'poin.co'

#   # AWSリージョンの識別子。東京リージョンの場合は`ap-northeast-1`
#   sync.fog_region = 'ap-northeast-1'

#   # AWSアクセスキーID
#   sync.aws_access_key_id = '*****'

#   # AWSシークレットアクセスキー
#   sync.aws_secret_access_key = '*****'

#   # アップロード時に既存ファイルを削除するかどうか。`delete`または`keep`
#   sync.existing_remote_files = 'keep'

#   # ファイルをgzip圧縮したもので置き換えるかどうか。`true`または`false`
#   sync.gzip_compression = true

#   # Middlemanのビルド完了後に自動で同期を行うかどうか。`true`または`false`
#   # デフォルトでは行う（`true`）
#   sync.after_build = true
# end
