package libraryManagementSystem;

public class MaximumBooksAllowedException extends Exception {

	private static final long serialVersionUID = 1L;

	public MaxBooksAllowedException() {
		super("Maximum Book lending limit Reached");
	}
}