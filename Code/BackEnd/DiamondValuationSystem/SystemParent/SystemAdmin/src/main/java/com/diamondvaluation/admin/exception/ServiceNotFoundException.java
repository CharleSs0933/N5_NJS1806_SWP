package com.diamondvaluation.admin.exception;

public class ServiceNotFoundException extends RuntimeException{
	public ServiceNotFoundException(String message) {
		super(message);
	}
}
