package com.samet.alternative.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samet.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
