package libraryManagementSystem;

import java.util.List;

public abstract class LibrarySystem implements Interface_Library {
	   protected List<Book> books;
	   protected List<User> users;

	   public abstract void addBook(Book book);
	   public abstract void addUser(User user);

	   	}
