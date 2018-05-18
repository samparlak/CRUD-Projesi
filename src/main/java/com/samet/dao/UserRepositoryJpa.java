//package com.samet.dao;
//
//import java.util.List;
//
//import javax.persistence.EntityManager;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Repository;
//
//import com.samet.model.User;
//
//@Repository
//public class UserRepositoryJpa implements UserRepository {
//
//	@Autowired
//	private EntityManager entityManager;
//
//	@Override
//	public List<User> getUsers() {
//		return entityManager.createQuery("from User", User.class).getResultList();
//	}
//
//	@Override
//	public void createUser(User user) {
//		entityManager.persist(user);
//	}
//
//	@Override
//	public  void updateUser(User user) {
//		 entityManager.merge(user);
//	}
//
//	@Override
//	public void deleteUser(Long id) {
//		entityManager.remove(entityManager.getReference(User.class, id));
//	}
//
//	@Override
//	public User getUser(Long id) {
//		return entityManager.find(User.class, id);
//	}
//
//}
