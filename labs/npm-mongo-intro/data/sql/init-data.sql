
----------------- Users -------------------

insert dbo.[User](username, email, firstName, lastName, imageURL)
values('sallysmith', 'ss@gmail.com', 'Sally', 'Smith', 'https://images.unsplash.com/photo-1579591919791-0e3737ae3808?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80')

insert dbo.[User](username, email, firstName, lastName, imageURL)
values('joejones', 'jj@gmail.com', 'Joe', 'Jones', 'https://images.unsplash.com/photo-1598198414976-ddb788ec80c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80')


----------------- Topics -------------------

insert dbo.[Topic](name, title, color, showcaseArticleId)
values ('tech', '#009cff', 'Technology', 16)

insert dbo.[Topic](name, title, color, showcaseArticleId)
values ('science', '#3bd142', 'Science', 20)

insert dbo.[Topic](name, title, color, showcaseArticleId)
values ('food', '#d1483b', 'Food', 8)

insert dbo.[Topic](name, title, color, showcaseArticleId)
values ('arts', '#a66bbe', 'Food', 13)

insert dbo.[Topic](name, title, color, showcaseArticleId)
values ('sports', '#f99500', 'Sports', 10)

----------------- Articles -------------------

insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 1',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	2, -- science
	2  -- joe
	)

insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 2',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
	2, -- science
  1  -- sally
	)

insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 3',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/6529912/pexels-photo-6529912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	3, -- food
	1  -- sally
	)


insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 4',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	2, -- science
	1  -- sally
	)


insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 5',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	5, -- sports
	1  -- sally
	)

insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 6',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/256189/pexels-photo-256189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	4, -- arts
	1  -- sally
	)

insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 7',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
	3, -- food
	1  -- sally
	)


insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 8',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=5000',
	3, -- food
	1  -- sally
	)

insert Article(title, abstract, body, imageURL, topicID, authorId)
values(
	'Article 9',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
      impedit libero, beatae animi provident nesciunt molestias ipsam
      nemo ad.',
	'https://images.pexels.com/photos/853006/pexels-photo-853006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=50',
	3, -- food
	1  -- sally
	)


