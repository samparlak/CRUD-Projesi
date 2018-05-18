//package com.samet.web;
//
//import java.net.URI;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//import com.samet.dao.UserRepository;
//import com.samet.model.User;
//
//@RestController
//@RequestMapping("/api")
//@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
//public class UserRestController {
//
//	@Autowired
//	private UserRepository userRepository;
//
//	@GetMapping("/users")
//	public ResponseEntity<List<User>> getUsers() {
//		List<User> users = userRepository.getUsers();
//		return ResponseEntity.ok(users);
//	}
//	
//	@GetMapping("/user/{id}")
//	public ResponseEntity<User> getUserById(@PathVariable("id") Long id){
//		User user=userRepository.getUser(id);
//		return ResponseEntity.ok(user);
//	}
//
//	@PostMapping("/user")
//	public ResponseEntity<URI> createUser(@RequestBody User user) {
//		userRepository.createUser(user);
//		Long id = user.getId();
//		URI location = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}").buildAndExpand(id).toUri();
//		return ResponseEntity.created(location).build();
//	}
//
//	@PutMapping("/user/{id}")
//	public ResponseEntity<URI> updateUser(@RequestBody User userRequest,@PathVariable("id") Long id) {
//		User user=userRepository.getUser(id);
//		user.setFirstName(userRequest.getFirstName());
//		user.setLastName(userRequest.getLastName());
//		userRepository.updateUser(user);
//	return ResponseEntity.ok().build();
//	}
//	
//	@DeleteMapping("/user/{id}")
//	public void deleteOwner(@PathVariable("id") Long id) {
//		userRepository.deleteUser(id);
//	}
//}
