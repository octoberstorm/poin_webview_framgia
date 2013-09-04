module SiteHelpers

  def page_title
    title = data.page.title
    if data.page.title
      title << " | Poin"
    end
    title
  end

  def page_description
    if data.page.description
      description = data.page.description
    else
      description = "Poin"
    end
    description
  end

  def http_equiv
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'
  end

  def viewport
    '<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" user-scale="no">'
  end

  def og
    '
    <meta name="description" content="Poin is a new place to write & organize your ""How Was It?"." />
    <meta property="fb:app_id" content="465830426818788" />
    <meta property="og:title" content="Poin - A new place to write & organize your "How Was It?"." />
    <meta property="og:description" content="Poin is a new place to write & organize your "How Was It?"." />
    <meta property="og:url" content="http://poin.co" />
    <meta property="og:image" content="http://poin.co/images/poin.png" />
    <meta property="og:site_name" content="Poin - A new place to write & organize your "How Was It?"." />
    <meta property="article:publisher" content="https://www.facebook.com/pages/Poin/494084833960635?ref=hl" />
    <meta name="twitter:card" content="large_image_summary">
    <meta name="twitter:site" content="@poinapp">
    <meta name="twitter:image:src" content="http://unsplash.s3.amazonaws.com/batch%206/Bird-Profile-Wellington-New-Zealand.jpg">
    <meta name="twitter:domain" content="http://ststgc.github.io/book_webview/pages/sakebook.html">
    '
    
  end


end